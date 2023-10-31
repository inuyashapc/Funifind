import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import io from "socket.io-client";


export default function Message() {
	const router = useRouter();
	const { id } = router.query;
	const [messages, setMessages] = useState([]);
	const [userData, setUserData] = useState({})
	const [messageInput, setMessageInput] = useState('');
	const receiver = id;
	/** Bắt đầu phần Trung sửa kết nối socket và nhắn tin */
	const [socket, setSocket] = useState(null);
	// Kết nối tới sever socket
	useEffect(() => {
		const newSocket = io(process.env.NEXT_PUBLIC_BASE_URL);
		setSocket(newSocket);
		if (userData) {
			newSocket.emit('storeUserId', userData.email);
		}
	}, []);

	// Chạy khi socket change ( có dữ liệu chuyển từ server xuống );
	useEffect(() => {
		if (socket) {
			// Khi nào có người nhắn tin thì sẽ nhận dữ liệu ở đây
			socket.on('privateMessage', (data) => {
				setMessages(messages => [...messages, data])
			})
		}
	}, [socket]);

	/** Kết thúc phần Trung sửa kết nối socket và nhắn tin */

	const getDayFromDate = (createdAt) => {
		if (createdAt && createdAt.length >= 10) {
			return createdAt.substring(0, 10);
		}
		return "";
	};

	useEffect(() => {
		setUserData(JSON.parse(localStorage.getItem("user")));
	}, [])

	useEffect(() => {
		if (userData?.accessToken) {
			const headers = {
				"x-access-token": userData?.accessToken,
			};
			fetch(process.env.NEXT_PUBLIC_BASE_URL + `messages/all?sender=${userData?.email}&receiver=${receiver}`, {
				method: "GET",
				headers: headers,
			})
				.then((response) => response.json())
				.then((data) => {
					setMessages(data.data);
					console.log(data.data);
				})
				.catch((error) => {
					console.error('Error fetching messages:', error);
				});
		} else {
			console.error("No token in local storage");
		}
	}, [userData]);

	const sendMessage = () => {
		if (userData?.accessToken) {
			const headers = {
				"x-access-token": userData.accessToken,
				"Content-Type": "application/json",
			};

			const data = {
				sender: userData.email,
				receiver: receiver,
				message: messageInput,
			};

			fetch(process.env.NEXT_PUBLIC_BASE_URL + "messages/save", {
				method: "POST",
				headers: headers,
				body: JSON.stringify(data),
			})
				.then((response) => response.json())
				.then((responseData) => {
					setMessages(messages => [...messages, responseData.data])
					socket.emit("privateMessage", data);
				})
				.catch((error) => {
					console.error('Error sending message:', error);
				});
		} else {
			console.error("No token in local storage");
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		sendMessage();
		setMessageInput('');
	};

	return (
		<>
			<div>
				<div className="w-full h-32" style={{ backgroundColor: "#00FFFF" }} />
				<div className="container mx-auto" style={{ marginTop: "-128px" }}>
					<div className="py-6 h-screen">
						<div className="flex border border-grey rounded shadow-lg h-full">
							{/* Left */}

							{/* Right */}
							<div className="w-full border flex flex-col">
								{/* Header */}
								<div className="h-20 py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
									<div className="flex items-center">
										<div>
											{/* ảnh đại diện receiver */}
										</div>
										<div className="ml-4">
											<p className="text-grey-darkest mb-0"> {/*Tên receiver*/}</p>
										</div>
									</div>

								</div>
								{/* Messages */}
								<div
									className="flex-1 overflow-auto bg-gray-300"

								>
									{messages.map((message, index) => (
										<div key={index} className="py-2 px-3">
											<div className="flex justify-center mb-2">
												{/* <div className="rounded py-2 px-4" style={{ backgroundColor: "#DDECF2" }}>
                          <p className="text-sm uppercase m-0">{getDayFromDate(message?.createdAt)}</p>
                        </div> */}
											</div>
											<div className={`flex mb-2 ${message?.sender == userData.email ? 'justify-end' : ''}`}>
												<div
													className="rounded py-2 px-3"
													style={{
														backgroundColor: message.sender ? "#E2F7CB" : "#F2F2F2",
													}}
												>
													<p className="text-sm m-0">{message?.message}</p>
												</div>
											</div>
										</div>
									))}
								</div>
								{/* Input */}
								<form onSubmit={handleSubmit}>
									<div className="bg-gray-300 p-4 flex items-center">
										<div className="flex-1 mx-2">
											<input
												className="w-full border rounded p-2"
												type="text"
												value={messageInput}
												onChange={(e) => setMessageInput(e.target.value)}
											/>
										</div>
										<button className='bg-green-500 text-white border rounded p-2' type="submit">Send</button> {/* Nút gửi tin nhắn */}
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>

	);
}

