import React, { FC, useState, useEffect } from "react";
import firebase from "../plugins/firebase";
const TwitterLogin: FC = () => {
	const [userInfo, setUserInfo] = useState<string>("");
	useEffect(() => {
		(async () => {
			firebase
				.auth()
				.getRedirectResult()
				.then((result) => {
					console.log(result.additionalUserInfo);
					setUserInfo(result.additionalUserInfo?.username ? result.additionalUserInfo?.username : "");
				});
		})();
	}, []);

	const LoginHandler = async () => {
		const provider = new firebase.auth.TwitterAuthProvider();
		firebase
			.auth()
			.signInWithRedirect(provider)
			.then((result) => {
				console.log("ok");
			});
	};

	return (
		<div>
			<button onClick={LoginHandler}>PUSH</button>
			{userInfo.length > 0 ? userInfo : "LOADING"}
		</div>
	);
};
export default TwitterLogin;
