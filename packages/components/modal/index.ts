import { withInstall, withInstallFuction } from '../../utils'
import Modal from './modal.vue'
import modalCall from './modal-call'



export const LeModalCall = withInstallFuction(modalCall, '$modal')

export const LeModal = withInstall(Modal)






