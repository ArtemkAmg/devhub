import { useRef } from "react";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";

export default function ProjectsPage() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="projects-page">
      <div className="projects-header">
        <div>
          <p className="eyebrow">MY WORK</p>

          <h1>Projects</h1>

          <p>
            Collection of websites and applications I've built.
          </p>
        </div>

        <div className="projects-count">
          {projects.length} Projects
        </div>
      </div>

      <div className="projects-slider">

        <button
          className="slider-btn prev"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <FiChevronLeft />
        </button>

        <Swiper
          modules={[Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={28}
          slidesPerView={1}
          grabCursor={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="slider-btn next"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <FiChevronRight />
        </button>

      </div>
    </div>
  );
}