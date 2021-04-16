import React, { FC, useEffect } from "react";
import firebase from "../plugins/firebase";
import { useDispatch, useSelector } from "react-redux";
import { twitterSlice } from "../stores/twitter";
import { AppState } from "../store";
const TwitterLogin: FC = () => {
	const { twitterId } = useSelector<AppState, { twitterId: string }>((state) => {
		return {
			twitterId: state.twitter.id,
		};
	});
	const dispatch = useDispatch();
	const { updateId } = twitterSlice.actions;
	useEffect(() => {
		(async () => {
			firebase
				.auth()
				.getRedirectResult()
				.then((result) => {
                    console.log(result.additionalUserInfo);
                    dispatch(updateId(result.additionalUserInfo?.username?result.additionalUserInfo?.username:""))

				});
		})();
	}, [updateId, dispatch]);

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
			{twitterId.length > 0 ? twitterId : "LOADING"}
		</div>
	);
};
export default TwitterLogin;
