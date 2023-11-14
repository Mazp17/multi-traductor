interface TextTargetProps {
  selectedOption: string;
}

export const TextTarget: React.FC<TextTargetProps> = ({ selectedOption }) => (
  <div className="h-1/2 relative texttarget__selected">
    <span className="absolute text-[#27282E] bg-[#E5E7EB] border-2 border-[#ADB1B8] text-xs font-medium right-[10px] top-[9px] px-2 py-[4px] rounded-md">
      {selectedOption}
    </span>
    <textarea
      className="px-2 py-2 bg-[#F3F4F9] rounded-md text-zinc-700 w-full h-full"
      name="text-target"
      id="text-target"
      cols={30}
    ></textarea>
  </div>
);
