import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Test </Htag>
      <Button appearance='primary' className={'classs'}>Кнопка</Button>
      <Button appearance='ghost'>Кнопка</Button>
    </>
  );
}
