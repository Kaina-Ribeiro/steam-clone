import Image from 'next/image';

import { Cover, Game, Screenshot } from '@/types/_api';
import { Body, Container, Wrapper, Header, ImageCover } from '@/styles/GameCard';
import { Title } from '@/styles/sharedstyes';
import { useEffect, useMemo, useRef, useState } from 'react';

type GameProps = {
  game: Game<Cover, Screenshot>;
};

const useHover = () => {
  const [hovered, setHovered] = useState<boolean>();

  const eventHandlers = useMemo(
    () => ({
      onMouseOver() {
        setHovered(true);
      },
      onMouseOut() {
        setHovered(false);
      },
    }),
    [],
  );

  return [hovered, eventHandlers];
};

const GameCard = ({ game }: GameProps) => {
  const { cover, screenshots } = game;

  const [hovered, eventHandlers] = useHover();

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderInterval = useRef<NodeJS.Timer>(); // useRef does not cause a re-render

  const switchImages = () => {
    if (screenshots && currentSlide < screenshots.length - 1) {
      setCurrentSlide(currentSlide + 1);
      return;
    }

    setCurrentSlide(0);
  };

  useEffect(() => {
    sliderInterval.current = setInterval(() => {
      switchImages();
    }, 5000);

    return () => {
      clearInterval(sliderInterval.current);
    };
  });

  return (
    <Container {...eventHandlers}>
      <ImageCover>
        <Image src={cover ? 'http:' + cover.url : '/next.svg'} alt={game.name} fill />
      </ImageCover>
      {hovered ? (
        <Wrapper>
          <Header>
            {screenshots ? (
              screenshots.map((screenshot, idx) => (
                <Image
                  key={screenshot.id}
                  src={'http:' + screenshot.url}
                  alt={`Screenshot ${idx}`}
                  fill
                  className={idx === currentSlide ? 'imageActive homeImage' : 'image'}
                />
              ))
            ) : (
              <Image src="/next.svg" alt={game.name} fill />
            )}
          </Header>
          <Body>
            <Title>{game.name}</Title>
            {game.summary}
          </Body>
        </Wrapper>
      ) : null}
    </Container>
  );
};

export { GameCard };
