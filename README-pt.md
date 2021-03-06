# Bloqueador de conteúdo inapropriado do Netflix

## Instalação

* Baixe a extenção Tampermonkey para o seu navegador clicando [aqui](https://www.tampermonkey.net). *Essa extensão permite a execução de scripts no seu navegador, instale apenas scripts de fontes confiáveis.*
* Instale o script para filtrar o conteúdo do Netflix clicando [aqui](https://github.com/theguardian58/Netflix-Hide-Content/raw/main/hide-script.user.js), e selecionando **Install**. A imagem abaixo mostra como deve ser a tela, e onde apertar para instalar:

![image](https://user-images.githubusercontent.com/95828579/145464061-1965f24f-07f2-4898-945a-fb4081fd4bab.png)

Pronto, você já tem o filtro de conteúdo instalado no seu navegador.

## Utilização

Após instalar o script, você vai ver algumas modificações no site da [Netflix](https://www.netflix.com).
As mudanças são:
1. Existe uma pequena bandeira próxima à imagem de cada filme:
![image](https://user-images.githubusercontent.com/95828579/145468198-7d0dd377-0ac9-4590-bf6a-5955af277bcc.png)
Ao clicar nesta bandeira, você está marcando este filme como impróprio para você, com isso ele desaparecerá e não voltará a ser exibido no seu navegador.
2. Existirão filmes faltando na tela:  
![image](https://user-images.githubusercontent.com/95828579/145470859-24fd9f57-1100-46bf-b846-18e58fb494b2.png)  
Todos os filmes que foram marcados desaparecerão, mostrando apenas o espaço vazio no lugar.
3. Filmes já pré selecionados: Já existem [filmes pré selecionados](https://raw.githubusercontent.com/theguardian58/Netflix-Hide-Content/main/ban-list.json) para sumirem da tela de todos que instalam o script. Você pode fazer uma pequena modificação no script se não quiser essa lista pré-selecionada, ou pode contribuir sugerindo novos filmes para serem bloqueados para todos.
