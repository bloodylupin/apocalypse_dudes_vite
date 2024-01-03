import { useEffect, useState } from "react";

type MetadataType = {
  image: string;
  description: string;
  name: string;
};

export default function Nft({ data }: { data: string }) {
  const [metadata, setMetadata] = useState<MetadataType | undefined>();
  useEffect(() => {
    (async () => {
      const singleMetadata: MetadataType = await fetch(data)
        .then((resp) => resp.json())
        .then((resp) => resp)
        .catch((e) => console.log(e));
      setMetadata(singleMetadata);
    })();
  }, [data]);

  return metadata ? (
    <a
      // href={`https://ipfs.io/ipfs/${metadata.image.split("/")[2]}/${
      //   metadata.image.split("/")[3]
      // }`}
      href={`https://${metadata.image.split("/")[2]}.ipfs.nftstorage.link/${
        metadata.image.split("/")[3]
      }`}
      target="_blank"
    >
      <figure>
        <img
          // src={`https://ipfs.io/ipfs/${metadata.image.split("/")[2]}/${
          //   metadata.image.split("/")[3]
          // }`}
          src={`https://${metadata.image.split("/")[2]}.ipfs.nftstorage.link/${
            metadata.image.split("/")[3]
          }`}
          alt={metadata.name}
          className="rounded shadow-lg shadow-primary"
        />
        <figcaption className="mt-4">{metadata.name}</figcaption>
      </figure>
    </a>
  ) : null;
}
