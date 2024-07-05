export default function TotalCount({ totalCount }) {
  return (
    <div className="w-1/2 border w-32 flex flex-col items-center gap-2 p-4 bg-gray-100 flex flex-col gap-4">
      <h2>Total Count</h2>
      <h5 className="bg-purple-300 text-white p-4 px-6 text-3xl">
        {totalCount}
      </h5>
    </div>
  );
}
