import Button from "./Button";

const Category = ({ title, expenses }) => {
  return (
    <div className="w-1/2 h-72 rounded-xl bg-sky-500 p-8">
      <div className="flex justify-between">
        <h1 className="text-4xl">{title}</h1>
        <Button />
      </div>
      <div>
        <ul>
          {expenses.map((expense) => (
            <li key={expense}>{expense}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
