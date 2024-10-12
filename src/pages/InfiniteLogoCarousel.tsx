import React, { useEffect, useRef, useState } from 'react';
import Icon from './srt.svg';
import styled from 'styled-components';

interface Logo {
  src: string;
  alt: string;
}

const InfiniteLogoCarousel: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
    return () => clearInterval(timer);
  }, []);

  // 날짜와 시간을 원하는 형식으로 포맷팅하는 함수
  const formatDateTime = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const formattedDateTime = formatDateTime(currentTime);

  const carouselRef = useRef<HTMLDivElement | null>(null);

  const logos: Logo[] = [
    { src: Icon, alt: "Logo 1" },
    { src: Icon, alt: "Logo 2" },
    { src: Icon, alt: "Logo 3" },
    { src: Icon, alt: "Logo 4" },
    { src: Icon, alt: "Logo 5" }
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationId: number;
    let isMoving = true;
    const pauseDuration = 200; // 0.1초 멈춤
  
    const animate = () => {
      if (carousel) {
        if (isMoving) {
          if (carousel.scrollLeft <= 0) {
            carousel.scrollLeft = carousel.scrollWidth / 2;
          } else {
            carousel.scrollLeft -= 3; // 속도 조절
          }
          
          // 이동 후 일시 정지
          isMoving = false;
          setTimeout(() => {
            isMoving = true;
          }, pauseDuration);
        }
      }
      animationId = requestAnimationFrame(animate);
    };
  
    animationId = requestAnimationFrame(animate);
  
    return () => cancelAnimationFrame(animationId);
  }, []);
  return (
    <div style={{ position: 'relative' }}>
      <Wrapper className="w-full overflow-hidden" ref={carouselRef}>
        <Span>{formattedDateTime}</Span>
        <Wrap>
          {[...logos, ...logos].map((logo, index) => (
            <Img
              key={index}
              src={logo.src}
              alt={logo.alt}
            />
          ))}

        </Wrap>
      </Wrapper>
    </div>
  );
};

const Span = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15px;
  letter-spacing: -0.7px;
  color: #fff;
  font-weight: 700;
`
const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  background: #4C3049;
  padding: 0.7rem;
`

const Wrap = styled.div`
  display: flex;
  gap: 6px;
`
const Img = styled.img`
  width: 60px;
  height: 19px;
`

export default InfiniteLogoCarousel;