import Image from "next/image";
import curriculumQR from "../../public/qr/curriculum.png";

const CurriculumQR = () => {
  return (
    <>
      <h1>Origami Curriculum</h1>
      <Image
        src={curriculumQR}
        alt="https://docs.google.com/document/d/1zYfA03vzZuM32DhBsXpkN6UoAOzaZXDDfSZi7IZHq4Y/edit?usp=sharing"
      />
    </>
  );
};

export default CurriculumQR;
