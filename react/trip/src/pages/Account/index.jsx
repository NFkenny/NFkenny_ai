import { useTitle } from "@/hooks/useTitle";
import { useState } from "react";
import {
  Image,
  Cell,
  CellGroup,
  ActionSheet,
  Popup,
  Loading,
} from "react-vant";
import {
  ServiceO,
  FriendsO,
  StarO,
  SettingO,
  UserCircleO,
} from "@react-vant/icons";
import { generateAvatar } from "@/llm";
import styles from "./account.module.css";

const Account = () => {
  useTitle("我的");
  const [userInfo, setUserInfo] = useState({
    nickname: "南方Kenny",
    level: "4级",
    slogan: "生活因你而火热",
    avatar: "@/../public/NFkenny.jpeg",
  });
  const [showActionSheet, setShowActionSheet] = useState(false);
  //
  const handleAction = async (e) => {
    console.log(e);
    if (e.type === 1) {
      // AI生成头像
      const text = `
        昵称: ${userInfo.nickname}
        签名: ${userInfo.slogan}
      `;
      const newAvatar = await generateAvatar(text);
    } else if (e.type === 2) {
      // 图片上传
    }
  };
  // 定义操作列表
  const actions = [
    {
      name: "AI生成头像",
      color: "#123123",
      type: 1,
    },
    {
      name: "上传头像",
      color: "#312312",
      type: 2,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        {/* 头像 */}
        <Image
          round
          width="64px"
          height="64px"
          style={{ cursor: "pointer" }}
          src={userInfo.avatar}
          onClick={() => setShowActionSheet(true)}
        />
        {/* 昵称、等级、签名 */}
        <div className="mt4">
          <div className={styles.nickname}>昵称: {userInfo.nickname}</div>
          <div className={styles.level}>等级: {userInfo.level}</div>
          <div className={styles.slogan}>签名: {userInfo.slogan}</div>
        </div>
      </div>
      <div className="mt3">
        <CellGroup inset>
          <Cell title="服务" icon={<ServiceO />} isLink />
        </CellGroup>
        <CellGroup inset className="mt2">
          <Cell title="收藏" icon={<StarO />} isLink />
          <Cell title="朋友圈" icon={<FriendsO />} isLink />
        </CellGroup>
        <CellGroup inset className="mt2">
          <Cell title="设置" icon={<SettingO />} isLink />
        </CellGroup>
      </div>
      <ActionSheet
        visible={showActionSheet}
        actions={actions}
        cancelText="取消"
        onCancel={() => setShowActionSheet(false)}
        onSelect={(e) => handleAction(e)}
      >
      </ActionSheet>
    </div>
  );
};
export default Account;
