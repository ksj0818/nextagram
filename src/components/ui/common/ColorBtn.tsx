type Props = {
  text: string;
  onClick: () => void;
};

export default function ColorBtn({ text, onClick }: Props) {
  return (
    <div className="p-[0.15rem]  rounded-md  bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300">
      <button className="px-4 py-2 text-base transition-all bg-white rounded-sm hover:opacity-90" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
