import styles from "./index.module.css";

export default function Loading(
  props: React.PropsWithChildren<{ active?: boolean }>
) {
  return (
    <div className="relative">
      {props.children}

      {props.active && (
        <div className={styles["switch"]}>
          <div />
          <div />
        </div>
      )}
    </div>
  );
}
