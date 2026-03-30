const express = require('express');
const axios = require('axios');
const multer = require('multer');
const app = express();
const PORT = 3000;

const API_KEY = 'sk-3d656921d0c045449c10d4e6966d63a2';

app.use(express.static(__dirname)); // 服务当前目录的静态文件

// 配置multer处理文件上传
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/api/analyze', upload.single('file'), async (req, res) => {
    const file = req.file;
    
    if (!file) {
        return res.status(400).json({ error: '未收到文件' });
    }
    
    
    try {
      // 根据文件类型处理
      let base64Data;
      console.log('文件类型:', file);
      const fileType = file.mimetype.split('/')[0];
        
        // 转换文件为base64
        if (['image', 'video', 'audio'].includes(fileType)) {

            // 多媒体文件转换为base64
            base64Data = file.buffer.toString('base64');
            
            const requestBody = {
                model: 'qwen-vl-max',
                messages: [
                    {
                        role: 'user',
                        content: [
                            {
                                type: 'text',
                                text: '请为这个文件打上3个最相关的标签，用逗号分隔'
                            },
                            {
                                type: 'image',
                                data: base64Data
                            }
                        ]
                    }
                ]
            };
            
            console.log('发送到API的参数:', JSON.stringify(requestBody, null, 2));
            
            console.log('Axios版本:', axios.version);
            
            const config = {
                headers: {
                    'Authorization': `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json'
                },
                validateStatus: function (status) {
                    return status < 500; // 仅当状态码大于等于500时拒绝
                }
            };
            
            const response = await axios.post(
                'https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation',
                requestBody,
                config
            );
            
            console.log('API响应状态:', response.status);
            console.log('API响应数据:', JSON.stringify(response.data, null, 2));
            
            const tags = response.data.output.text.split(',').slice(0, 3);
            res.json({ tags });
        } else {
            res.status(400).json({ error: '不支持的文件类型' });
        }
    } catch (error) {
        res.status(500).json({ 
            error: 'API调用失败',
            details: error.response?.data || error.message 
        });
        console.log();
        
    }
});

app.listen(PORT, () => console.log(`服务运行在 http://localhost:${PORT}`));