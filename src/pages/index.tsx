import Link from "next/link";

import Headers from '../components/Headers'
import Footer from '../components/Footer'

import * as S from './styles'

export default function Home() {
    return (
        <>
        <Headers />  
        <S.GlobalStyles />
        <S.Container>
        <S.TextBox>
            <S.Title>
            Start! Hora do desafio!
            </S.Title>
            <S.Content>
                Aprofundamento em Linguagens e suas Tecnologias e Matemática e suas Tecnologias | Ementa Geral
            </S.Content>
        </S.TextBox>
        <S.OrangeBox>
            <S.OrangeTitle>
            Estamos aprendendo
            </S.OrangeTitle>
                <S.OrangeContent>
                O que faz um resolvedor de problemas? Como a Matemática e as Linguagens podem nos ajudar a identificar problemas e resolvê-los? Que estratégias podemos aprender com esse processo e levar para a vida, para os estudos e para o mundo do trabalho? No aprofundamento “Start! Hora do desafio!” você construirá essas aprendizagens, resolvendo diferentes desafios, individual e colaborativamente, como, por exemplo: encarar aquela fase do jogo que não consegue avançar, analisar a viralização das notícias nas redes sociais, investigar materiais sustentáveis e suas aplicabilidades, aprender como ser mais autônomo nos estudos, participar de processos de criação e muito mais.
    Nessas e em outras práticas, você irá questionar, formular hipóteses, realizar análises, desenvolver estratégias, propor possíveis soluções, de modo ético e consciente. Com isso, poderá empreender projetos pessoais e coletivos, (re)conhecendo-se como um resolvedor de problemas.O percurso proposto vai te ajudar a ampliar o seu olhar sobre as questões relacionadas à sua comunidade, ao meio ambiente, às políticas públicas, à circulação de informações nas mídias, fazendo com que você se torne uma pessoa mais preparada para lidar com os problemas presentes no mundo atual.
                </S.OrangeContent>
        </S.OrangeBox>
            {/* <Link href="/pagina2">vou pagina2</Link> */}
        </S.Container>
        {/* <Footer /> */}
        </>
    );
    }

