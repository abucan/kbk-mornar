import Image from "next/image";
import sauna from "@/public/sauna.svg";
import massage from "@/public/massage.svg";

export const HeroCardItem = ({ title, image, itemIndex }: HeroCardItemProps) => {
  const Icon = image;
  return (
    <div
      className="flex flex-col items-center justify-center space-y-4"
      key={title}
    >
      {itemIndex === 1 && (
        <Image src={sauna} alt="Sauna" width={24} height={24} />
      )}
      {itemIndex === 2 && (
        <Image src={massage} alt="Massage" width={24} height={24} />
      )}
      {itemIndex !== 1 && itemIndex !== 2 && <Icon />}
      <h2 className="text-xs sm:text-base text-center font-[600] font-mono uppercase tracking-widest text-[#e08639]">
        {title}
      </h2>
    </div>
  );
};
