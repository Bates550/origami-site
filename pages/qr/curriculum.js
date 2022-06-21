import Image from "next/image";
import curriculumQR from "../../public/qr/curriculum.png";

const CurriculumQR = () => {
  return (
    <>
      <h1>Origami Curriculum</h1>
      Scan QR Code:
      <Image
        src={curriculumQR}
        alt="https://docs.google.com/document/d/1zYfA03vzZuM32DhBsXpkN6UoAOzaZXDDfSZi7IZHq4Y/edit?usp=sharing"
      />
      Or click this{" "}
      <a href="https://docs.google.com/document/d/1zYfA03vzZuM32DhBsXpkN6UoAOzaZXDDfSZi7IZHq4Y/edit?usp=sharing">
        direct link
      </a>
      .
    </>
  );
};

export default CurriculumQR;
