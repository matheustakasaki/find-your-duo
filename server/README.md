# Find your duo - Back-end

## Entidades

### Game

id
title
bannerUrl (vamos usar a url da twitch, assim nao mexeremos com o upload)

### Ad

id
gameId
name
yearsPlaying
discord
weekDays
hourStart
hourEnd
useVoiceChannel
createdAt

### Casos de uso

Como o usuário vai se relacionar com nossa aplicação, quais ações eles podem fazer ali dentro.
Geralmente, cada tipo de comunicação do front com o back, gera um caso de uso.

Exemplo:

1. Lista de game com contagem de anúncios
2. Criação de novo anúncio
3. Lista de anúncio por game
4. Buscar discord pelo ID do anúncio

http://localhost:3333/games
