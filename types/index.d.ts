interface TrainerItemProps {
  avatar: string;
  name: string;
  title: string;
  content: () => React.ReactNode;
  isDialog?: boolean;
}

interface StepsProps {
  steps: {
    stepsItems: string[];
    currentStep: number;
  };
  setStep: Dispatch<
    SetStateAction<{
      stepsItems: string[];
      currentStep: number;
    }>
  >;
}

interface ImageUploadProps {
  setImage: Dispatch<SetStateAction<string>>;
  setStep: Dispatch<
    SetStateAction<{
      stepsItems: string[];
      currentStep: number;
    }>
  >;
}

interface CustomFormFieldProps {
  name: string;
  placeholder: string;
  label: string;
  isTextArea?: boolean;
}

interface CreatePostProps {
  title: string;
  description: string;
  imageUrl: string;
}

interface CreateFormProps {
  imgUrl: string;
  setStep: Dispatch<
    SetStateAction<{
      stepsItems: string[];
      currentStep: number;
    }>
  >;
}

interface BlogAnimatedProps {
  selectedId: any | null;
  setSelectedId: Dispatch<SetStateAction<any | null>>;
}

interface BlogCardDetailsProps {
  image: string;
  title: string;
  info: string;
}

interface BlogCardProps {
  id: string;
  message: string;
  full_picture: string;
  created_time: string;
}

interface HamMenuProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

interface HeaderProps {
  title: string;
  description: string;
  isRightSide?: boolean;
}

interface HeroCardItemProps {
  title: string;
  image: any;
}

interface LogoProps {
  width?: number;
  isFooter?: boolean;
}

interface NavItemProps {
  path: string;
  title: string;
  idx: number;
}

interface ScheduleItemProps {
  day: {
    dayOfWeek: string;
    sessions: {
      name: string;
      trainer: string;
      time: string;
    }[];
  };
}

interface HeroItem {
  title: string;
  image: LucideIcon;
}
