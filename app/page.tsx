import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <div>
      <Pagination pageCount={100} pageSize={10} currentPage={2} />
    </div>
  );
}
