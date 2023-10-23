import React from 'react';
import { AiFillGithub, AiOutlineDownload } from 'react-icons/ai';

interface Props {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  side?: 'left' | 'right';
  link?: string;
}

const Button: React.FC<Props> = ({ side = 'left', children, icon, link }: Props) => {
  return (
    <div className="h-fit w-fit">
      <a href={link}>
        <div className="flex w-26 items-center justify-center gap-1.5 rounded-sm border border-black p-1.5 text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black mt-2">
          {side === 'left' && <div>{icon}</div>}
          {children}
          {side === 'right' && <div>{icon}</div>}
        </div>
      </a>
    </div>
  );
};

export default Button;

export function GhButton(props: Props) {
  return (
    <Button icon={<AiFillGithub />} side={props.side} link={props.link}>
      GitHub
    </Button>
  );
}

/*
export function DocButton(props: Props) {
  return (
    <Button icon={<IconFileText />} side={props.side} link={props.link}>
      Documentation
    </Button>
  );
}
*/

export function DownloadButton(props: Props) {
  return (
    <Button icon={<AiOutlineDownload />} side={props.side} link={props.link}>
      Download
    </Button>
  );
}

/*
export function ReleaseButton(props: Props) {
  return (
    <Button icon={<IconTag />} side={props.side} link={props.link}>
      Releases
    </Button>
  );
}

export function NpmButton(props: Props) {
  return (
    <Button icon={<IconBrandNpm />} side={props.side} link={props.link}>
      Package
    </Button>
  );
}
*/