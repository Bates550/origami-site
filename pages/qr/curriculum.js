import Image from "next/image";
import curriculumQR from "../../public/qr/curriculum.png";
import { CURRICULUM_URL } from "../../constants.ts";

const CurriculumQR = () => {
  return (
    <>
      <h1>Origami Curriculum</h1>
      <p>Scan QR Code:</p>
      <Image src={curriculumQR} alt={CURRICULUM_URL} />
      <p>
        Or click this <a href={CURRICULUM_URL}>direct link</a>.
      </p>
    </>
  );
};

export default CurriculumQR;
