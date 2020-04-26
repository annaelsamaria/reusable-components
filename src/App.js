import React from 'react'
import styled from 'styled-components/macro'
import { Card } from 'lib/Card'
import { TopAppBar } from 'lib/TopAppBar'
import { MaterialIcon } from 'lib/MaterialIcon'



const ThinnerCard = styled(Card)`
  width: 400px;
`

export const App = () => {
  return (
    <div>
      <TopAppBar
        title='Top App Bar'
        navigationIcon={<MaterialIcon
          icon='menu'
          onClick={() => console.log('click')}
        />}
        actionItems={[
          <MaterialIcon icon='cloud' />,
          <MaterialIcon icon='rowing' />,
          <MaterialIcon icon='headset' />,
        ]}
      />

      <ThinnerCard
        coverImage={"https://www.fillmurray.com/g/500/300"}
        title={"This is the title"}
        secondaryText={"Secondary title"}
        thumbnailUrl={"https://www.fillmurray.com/g/100/100"} />

      <Card title={"Only a title"} secondaryText={"And a second text"} />
    </div>
  )
}
