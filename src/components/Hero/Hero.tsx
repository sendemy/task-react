import { siteConfig } from '@/config/site'
import { HeadingLg } from '@/styles/styles'
import { useState } from 'react'
import { YoutubePlayButton } from '../YoutubePlayButton/YoutubePlayButton'
import {
	Container,
	IFrame,
	Text,
	TextContainer,
	VideoContainer,
	VideoImage,
} from './Hero.styles'

export function Hero() {
	const [showVideo, setShowVideo] = useState(false)

	function handleClick() {
		setShowVideo(true)
	}

	return (
		<Container>
			<TextContainer>
				<HeadingLg>{siteConfig.homePage.hero.title}</HeadingLg>
				<Text>{siteConfig.homePage.hero.text}</Text>
			</TextContainer>
			<div>
				<VideoContainer>
					{showVideo ? (
						<IFrame
							width='720'
							height='360'
							src='https://www.youtube.com/embed/dQw4w9WgXcQ'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							loading='lazy'
						></IFrame>
					) : (
						<>
							<VideoImage
								src='https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg'
								alt='Video image'
								width={720}
								height={360}
							/>
							<YoutubePlayButton onClick={handleClick} />
						</>
					)}
				</VideoContainer>
			</div>
		</Container>
	)
}
