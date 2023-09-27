interface scoreButtonProps {
  name: string;
  onChange: () => void;
}

export const ScoreButton = ({ name, onChange }: scoreButtonProps) => {
  return <button onClick={onChange}>{name}</button>;
};
