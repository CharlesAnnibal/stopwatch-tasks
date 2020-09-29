import React, { useEffect, useState } from 'react';
import { NotificationsComponentWrapper, Select, Option } from './style.js';
import MiniButton from '../MiniButton';
import { askPermissionNotification } from '../../services/notifications/notificationService';
import { MAIN_COLOR_DARK, MAIN_COLOR_MEDIUM } from '../../constants/defaultStyleProps.js';

const NotificationsComponent = ({ currentStrTime, currentSeconds , description}) => {

    const [showSelect, setShowSelect] = useState(false)
    const [intervalTime, setIntervalTime] = useState(5)

    useEffect(() => {
        if ((currentSeconds-1) > 0 && (currentSeconds-1) % (intervalTime * 60) === 0) {
            _showNotification()
        }
    }, [currentSeconds])

    const _toggleSelectNotifications = () => {
        askPermissionNotification(
            () => {
                console.log("sucesso")
                setShowSelect(!showSelect)
            },
            () => {
                console.log("false")
                setShowSelect(false)
            }
        )
    }

    const _changeTimeOfNotifications = (value) => {
        setIntervalTime(parseInt(value));
    }

    const _showNotification = () => {
        const text = `${currentStrTime} spent on task "${description}" .`;
        const notification = new Notification("Task time reminder", { body: text });
    }


    return (
        <NotificationsComponentWrapper>
            <MiniButton borderColor={MAIN_COLOR_DARK} onClick={() => _toggleSelectNotifications()}>Schedule reminder notifications</MiniButton>
            <Select showSelect={showSelect} onChange={(e) => { _changeTimeOfNotifications(e.target.value) }}>
                <Option value="5">Each 5 minutes</Option>
                <Option value="10">Each 10 minutes</Option>
                <Option value="15">Each 15 minutes</Option>
                <Option value="25">Each 25 minutes</Option>
                <Option value="30">Each 30 minutes</Option>
                <Option value="60">Each 1 hour</Option>
            </Select>
        </NotificationsComponentWrapper>
    );
};
export default NotificationsComponent;
