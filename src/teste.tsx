import styled from 'styled-components';

type BotaoProps = {
  principal: boolean;
  fontSize?: string;
};

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`;

const BotaoPerigo = styled(Botao)`
  background: red;
  color: #fff;

  sapn {
    text-decoration: line-through;
  }
`;

function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>
        Clique Aqui
      </Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo principal>não clique Aqui</BotaoPerigo>
    </>
  );
}

export default Teste;
