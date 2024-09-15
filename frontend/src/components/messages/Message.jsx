// import { useAuthContext } from "../../context/AuthContext";
// // import { extractTime } from "../../utils/extractTime";
// import useConversation from "../../zustand/useConversation";

// const Message = ({ message }) => {
// 	const { authUser } = useAuthContext();
// 	const { selectedConversation } = useConversation();
// 	const fromMe = message.senderId === authUser._id;
// 	// const formattedTime = extractTime(message.createdAt);
// 	const chatClassName = fromMe ? "chat-end" : "chat-start";
// 	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
// 	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

// 	const shakeClass = message.shouldShake ? "shake" : "";

// 	return (
// 		<div className={`chat ${chatClassName}`}>
// 			<div className='chat-image avatar'>
// 				<div className='w-10 rounded-full'>
// 					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
// 				</div>
// 			</div>
// 			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
// 			{/* <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div> */}
// 		</div>
// 	);
// };
// export default Message;

import { useAuthContext } from "../../context/AuthContext";
// // import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const formattedTime = extractTime(message.createdAt);
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	// const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
 			<div className='chat-image avatar'>
 				<div className='w-10 rounded-full'>
 					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
 				</div>
 			</div>
 			<div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{message.message}</div>
 			<div className='chat-footer opacity-70 text-xs text-slate-300 flex gap-1 items-center'>{formattedTime != "NaN.NaN NaN:NaN" ? formattedTime : ""}</div>
	</div>
	);
};
export default Message;


function extractTime(dateString) {
	const date = new Date(dateString);
	const day = padZero(date.getDate());
	const month = padZero(date.getMonth());
	const hours = padZero(date.getHours());
	const minutes = padZero(date.getMinutes());
	return `${day}.${month} ${hours}:${minutes}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
	return number.toString().padStart(2, "0");
}