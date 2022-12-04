import React, { useState } from "react";
import { StackedCarousel } from "react-stacked-carousel";
import "react-stacked-carousel/dist/index.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Slider from "react-slick";

export default function Carrousel(props: CarrouselProps) {
  const [card, setCard] = useState(null);
  const [sideCards, setSideCards] = useState<number[]>([]);
  const onCardChange = (cards: ShowCardProps) => {
    setTimeout(() => {
      setSideCards([cards.previousIndex, cards.nextIndex]);
    }, 170);
  };

  return (
    <div className="block h-4/6">
      <StackedCarousel
        autoRotate={false}
        slidesToShow={3}
        onCardChange={onCardChange}
        containerClassName={"container w-screen mt-10"}
        leftButton={
          <button className="text-8xl h-3/5 mt-5 opacity-20 hover:opacity-50 transition absolute z-50 py-auto btn-carousel-left w-52 flex ml-10 ">
            <FaChevronLeft className="text-gray-900 m-auto" />
          </button>
        }
        rightButton={
          <button className="text-8xl h-3/5 mt-5 opacity-20 hover:opacity-50 transition absolute z-50 py-auto btn-carousel-right w-56 flex -ml-64">
            <FaChevronRight className="text-gray-900 m-auto" />
          </button>
        }
      >
        {props.banners.map((banner, i) => (
          <div
            key={banner.id}
            className={`transition-all ease-in-out duration-200 ${
              !sideCards.includes(i) ? "w-8/12 mx-auto" : "w-8/12 my-14"
            } ${sideCards[1] == i ? "ml-auto" : ""}`}
          >
            <Image
              src={banner.image}
              width={1080}
              height={720}
              alt="live streaming"
              layout="responsive"
              className="w-8/12"
            />
          </div>
        ))}
      </StackedCarousel>
    </div>
  );
}

interface BannerProps {
  image: string;
  link: string;
  id: number;
}

interface CarrouselProps {
  banners: BannerProps[];
}

interface ShowCardProps {
  previousIndex: number;
  nextIndex: number;
  currentIndex: number;
}
