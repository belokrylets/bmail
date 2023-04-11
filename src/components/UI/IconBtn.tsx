import IconBack from "assets/icons/IconBack"
import IconCart from "assets/icons/IconCart"
import IconClose from "assets/icons/IconClose"
import IconCloseNewMessage from "assets/icons/IconCloseNewMessage"
import IconDelete from "assets/icons/IconDelete"
import IconFolder from "assets/icons/IconFolder"
import IconIncoming from "assets/icons/IconIncoming"
import IconLogo from "assets/icons/IconLogo"
import IconNewMessage from "assets/icons/IconNewMessage"
import IconOpen from "assets/icons/IconOpen"
import IconPen from "assets/icons/IconPen"
import IconSent from "assets/icons/IconSent"
import IconSuccess from "assets/icons/IconSuccess"
import classNames from "classnames"
import React from "react"
import { IIconType } from "shared/modals/iconBtn.modal"

interface IconBtnProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type: IIconType
  classes?: string
}

const iconMapping = {
  back: <IconBack />,
  cart: <IconCart />,
  close: <IconClose />,
  closeNewMessage: <IconCloseNewMessage />,
  delete: <IconDelete />,
  folder: <IconFolder />,
  incoming: <IconIncoming />,
  logo: <IconLogo />,
  newMessage: <IconNewMessage />,
  open: <IconOpen />,
  pen: <IconPen />,
  sent: <IconSent />,
  success: <IconSuccess />,
}

const IconBtn: React.FC<IconBtnProps> = ({ onClick, classes, type }) => {
  return (
    <button
      // className={`icon-btn ${!!classes ? classes : ""}`}
      className={classNames("icon-btn", { [classes!]: !!classes })}
      onClick={onClick}>
      {iconMapping[type]}
    </button>
  )
}

export default IconBtn
