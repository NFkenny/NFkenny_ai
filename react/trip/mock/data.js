import Mock from "mockjs";

export default [
  {
    url: "/api/search",
    method: "get",
    timeout: 1000,
    response: (req, res) => {
      // ?keyword=立军军
      const keyword = req.query.keyword;
      let num = Math.floor(Math.random() * 10);
      let list = [];
      for (let i = 0; i < num; i++) {
        const randomData = Mock.mock({
          title: "@ctitle(3,6)",
        });
        console.log(randomData);
        list.push(`${randomData.title}${keyword}`);
      }
      return {
        code: 0,
        msg: "success",
        data: {
          keyword,
          list,
        },
      };
    },
  },
  {
    url: "/api/hotlist",
    method: "get",
    timeout: 1000,
    response: (req, res) => {
      return {
        code: 0,
        msg: "success",
        data: [
          {
            id: "101",
            city: "北京",
          },
          {
            id: "102",
            city: "上海",
          },
          {
            id: "103",
            city: "广州",
          },
        ],
      };
    },
  },
  {
    url: "/api/detail/:id",
    method: "get",
    timeout: 1000,
    response: (req, res) => {
      const randomData = Mock.mock({
        title: "@ctitle(3,6)",
        price: "@integer(60,500)",
        desc: "@cparagraph(10,30)",
        images: [
          {
            url: "https://img.36krcdn.com/hsossms/20250729/v2_17dc4793268c46558e68355c5b25a55d@000000@ai_oswg369871oswg1536oswg722_img_000~tplv-1marlgjv7f-ai-v3:600:400:600:400:q70.jpg?x-oss-process=image/format,webp",
            alt: "@ctitle(5, 10)",
          },
          {
            url: "https://img.36krcdn.com/hsossms/20250729/v2_17dc4793268c46558e68355c5b25a55d@000000@ai_oswg369871oswg1536oswg722_img_000~tplv-1marlgjv7f-ai-v3:600:400:600:400:q70.jpg?x-oss-process=image/format,webp",
            alt: "@ctitle(5, 10)",
          },
          {
            url: "https://img.36krcdn.com/hsossms/20250729/v2_17dc4793268c46558e68355c5b25a55d@000000@ai_oswg369871oswg1536oswg722_img_000~tplv-1marlgjv7f-ai-v3:600:400:600:400:q70.jpg?x-oss-process=image/format,webp",
            alt: "@ctitle(5, 10)",
          },
        ],
      });
      return {
        code: 0,
        msg: "success",
        data: randomData,
      };
    },
  },
];
