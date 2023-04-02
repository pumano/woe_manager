import styles from './player.module.css';

export interface PlayerProps {
  name: string;
  job: string;
  isLeader?: boolean;
}

export function Player(props: PlayerProps) {
  return (
    <div className="flex">
      <img
        src={`./assets/jobs/${props.job}.png`}
        className="w-10 md:w-6 mr-1"
      />
      {props.isLeader ? <strong>{props.name}</strong> : props.name}
    </div>
  );
}

export default Player;
