'use client';

import { PLATFORM_NAME_MAP } from 'constant';
import useEmblaCarousel from 'embla-carousel-react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { assert, isKeyOfObject } from 'utils';

import { styled } from '@/styled-system/jsx';
import SvgImage from '@/ui/svg-image';

export const LevelCarousel = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentLevel = Number(searchParams.get('level'));
  const activeLevelParam = Number(searchParams.get('activeLevel') ?? currentLevel);
  const platformParam = searchParams.get('platform');

  assert(!Number.isNaN(currentLevel));
  assert(isKeyOfObject(platformParam?.toUpperCase(), PLATFORM_NAME_MAP));

  const [carouselRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
  });

  const [activeLevel, setActiveLevel] = useState(
    currentLevel !== activeLevelParam ? activeLevelParam : currentLevel,
  );

  useEffect(() => {
    if (!emblaApi) return undefined;

    const scrollTimeId = setTimeout(() => {
      emblaApi.scrollTo(currentLevel - 1);
    }, 1000);

    return () => {
      clearTimeout(scrollTimeId);
    };
  }, [emblaApi, currentLevel]);

  return (
    <styled.div ref={carouselRef}>
      <styled.div display="flex" gap={16}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((level) => (
          <LevelButton
            key={level}
            level={level}
            isActive={activeLevel === level}
            isLocked={currentLevel < level}
            onClick={() => {
              if (level > currentLevel) return;
              setActiveLevel(level);
              router.replace(
                `/mashong/growth-diary?platform=${platformParam}&level=${currentLevel}&activeLevel=${level}`,
              );
            }}
          />
        ))}
      </styled.div>
    </styled.div>
  );
};

interface LevelButtonProps {
  level: number;
  isActive?: boolean;
  isLocked?: boolean;
  onClick: () => void;
}

const LevelButton = ({ level, isActive = false, isLocked = false, onClick }: LevelButtonProps) => (
  <styled.button type="button" onClick={onClick} cursor="pointer">
    <styled.div
      width={60}
      height={60}
      backgroundColor={isLocked ? 'gray.100' : isActive ? 'brand.100' : 'white'}
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius={10}
      borderWidth="1.5px"
      borderColor={isActive ? 'brand.500' : 'transparent'}
      userSelect="none"
      transition="all ease 400ms"
    >
      {isLocked ? (
        <SvgImage path="growth-diary/level-lock" width={32} height={32} />
      ) : (
        <styled.span fontWeight={700} fontSize={16} color={isActive ? 'brand.500' : 'gray.400'}>
          Lv.{level}
        </styled.span>
      )}
    </styled.div>
    <styled.span
      color={isActive ? 'brand.500' : 'gray.400'}
      fontWeight={500}
      fontSize={13}
      marginTop={4}
    >
      Lv.{level}
    </styled.span>
  </styled.button>
);
