export const Title = ({ title, theme }) => {
  return (
    <span
      className={`p-2 inline-block font-bold text-xl italic ${theme === 'light' ? 'text-gray-900' : 'text-gray-300'
        } truncate`}
      title={title}
    >
      {title}
    </span>
  );
};
