import { useCollection } from "../web3/CollectionProvider";

export default function Admin() {
  const { contract } = useCollection();
  const withdraw = async () => await contract?.withdraw();

  return (
    <>
      <button onClick={withdraw} className="btn btn-primary m-auto">
        withdraw
      </button>
    </>
  );
}
