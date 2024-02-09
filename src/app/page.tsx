"use client";
import { SECTIONS_MAP } from "@/app/constants";
import styles from "./map.module.css";
import { motion } from "framer-motion";
import { createRef, useEffect, useRef, useState } from "react";

export default function Login() {
  const [select, setSelect] = useState<number>();
  const [x, setX] = useState<number>();
  const [y, setY] = useState<number>();
  const canvasRefMap = new Map();
  const [canvasPositionMap, setCanvasPositionMap] = useState(new Map());
  SECTIONS_MAP.forEach((map) => {
    canvasRefMap.set(map.position, createRef());
  });

  function findSections(x: number, y: number) {
    const sections: number[] = [];
    canvasPositionMap.forEach((position, section) => {
      if (
        x > position.x &&
        y > position.y &&
        x < position.x + position.width &&
        y < position.y + position.height
      ) {
        sections.push(section);
      }
    });
    return sections;
  }
  function isTransparent(x: number, y: number, section: number) {
    const canvasRef = canvasRefMap.get(section);
    const canvas = canvasRef.current;
    const context: CanvasRenderingContext2D = canvas.getContext("2d");
    context;
    const pixelData = context.getImageData(x, y, 1, 1).data;
    return pixelData[3] === 0;
  }
  useEffect(() => {
    const newCanvasPositionMap = new Map();
    SECTIONS_MAP.forEach((map) => {
      const canvasRef = canvasRefMap.get(map.position);
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      newCanvasPositionMap.set(map.position, {
        x: rect.left,
        y: rect.top,
        width: map.width,
        height: map.height,
      });
      console.info({
        x: rect.left,
        y: rect.top,
        width: map.width,
        height: map.height,
      });
      const context: CanvasRenderingContext2D = canvas.getContext("2d");
      context;
      const image = new Image();
      image.src = map.src;
      image.onload = () => {
        context.drawImage(image, 0, 0);
      };
    });
    setCanvasPositionMap(newCanvasPositionMap);
  }, []);

  return (
    <main className={styles.wrapper}>
      <h1> Mapa </h1>
      <div className="flex flex-col">
        <h1>
          {" "}
          Elegiste la Seccion {select} Mouse on x:{x} y:{y}
        </h1>
        <div className="flex w-full h-[80vh] bg-blue-500 mt-4">
          {SECTIONS_MAP.map((section) => (
            <motion.div
              className="absolute"
              key={section.name}
              initial={{ x: section.x, y: section.y }}
            >
              <canvas
                ref={canvasRefMap.get(section.position)}
                width={section.width}
                height={section.height}
                onMouseMoveCapture={(e) => {
                  const x = e.pageX;
                  const y = e.pageY;
                  setX(x);
                  setY(y);

                  const sectionPostions = findSections(x, y);

                  sectionPostions.forEach((section) => {
                    const position = canvasPositionMap.get(section);
                    const isTrans = isTransparent(
                      x - position.x,
                      y - position.y,
                      section
                    );
                    if (!isTrans) {
                      setSelect(section);
                    }
                  });
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
