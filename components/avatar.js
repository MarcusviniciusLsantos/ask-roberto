export default function Avatar({
  name,
  width = 80,
  height = 80,
  className,
  title = true,
  loading = false,
}) {
  return (
    <div className="d-flex mt-2">
      <img src="/roberto.png" width={width} height={height} />
      {title ? (
        <h4 className={className ? className : "ps-2 mt-4"}>
          <b>{name}</b>
          {loading && (
            <div>
            <div class="spinner-grow spinner-grow-sm" role="status" />
            {" "}
            <div class="spinner-grow spinner-grow-sm" role="status" />
            {" "}
            <div class="spinner-grow spinner-grow-sm" role="status" />
            </div>
          )}
        </h4>
      ) : (
        <p className={className}>
          <b>{name}</b>
        </p>
      )}
    </div>
  );
}
