export default function RobotMascot({ size = 1 }) {
  return (
    <div
      className="mascot-wrap"
      style={{ transform: `scale(${size})` }}
      aria-label="THALIR the robot friend"
      role="img"
    >
      <div className="mascot">
        <div className="m-antenna">
          <span className="m-antenna-ball" />
        </div>

        <div className="m-head">
          <div className="m-ear m-ear-left" />
          <div className="m-ear m-ear-right" />
          <div className="m-visor">
            <div className="m-eyes">
              <span className="m-eye" />
              <span className="m-eye" />
            </div>
            <div className="m-mouth" />
            <span className="m-cheek m-cheek-left" />
            <span className="m-cheek m-cheek-right" />
          </div>
        </div>

        <div className="m-scarf" />

        <div className="m-body">
          <div className="m-heart">♥</div>
        </div>

        <div className="m-arm m-arm-left" />
        <div className="m-arm m-arm-right" />
        <div className="m-foot m-foot-left" />
        <div className="m-foot m-foot-right" />
      </div>
      <div className="m-shadow" />
    </div>
  );
}
