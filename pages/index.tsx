import { Button, Htag, Tag } from '../components';
import { P } from '../components/P/P';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Test </Htag>
      <Button appearance='primary' arrow='right' className={'classs'}>Кнопка</Button>
      <Button appearance='ghost' arrow='down'>Кнопка</Button>
      <P size='large'> Выше указаны программы Adobe InDesign</P>
      <P> Выше указаны программы Adobe InDesign</P>
      <P size='small'> Выше указаны программы Adobe InDesign</P>
      <Tag size='small' color='red'>Adobe InDesign</Tag>
      <Tag size='medium' color='green'>Adobe InDesign</Tag>
    </>
  );
}
