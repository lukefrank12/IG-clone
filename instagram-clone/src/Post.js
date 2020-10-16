import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'

function Post({ username, caption, imageUrl }) {
	return(
		<div className='post'>
			{/* Header -> avatar + username*/}
			<div className='post__header'>
				<Avatar 
				className='post__avatar'
				alt='Lukefrank'
				src='/static/images/avatar/1.jpg'
				/>
				<h3>{username}</h3>
			</div>

			{/*	image */}
			<img className='post__image' src='https://i.pinimg.com/564x/0d/e5/0e/0de50e96bd6d65a1610be79e832a2415.jpg' alt='' />
			{/*	username + caption */}
			<h4 className='post__text'><strong> {username} </strong> {caption} </h4>
		</div>

		)
}

export default Post