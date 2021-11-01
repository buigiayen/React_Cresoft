import { notification } from 'antd';


export const openNotificationWithIcon = (type, logger) => {
    notification[type]({
        message: 'Thông báo',
        description:
            logger,
    });
};


