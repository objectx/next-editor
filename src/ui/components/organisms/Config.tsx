import React from "react"
import styled from "styled-components"
import { ConfigState } from "../../reducers/config"

const themes = ["default", "dark"]

export const Config = ({
  config,
  onClickBack,
  onChangeConfigValue
}: {
  config: ConfigState
  onClickBack: () => void
  onChangeConfigValue: (key: string, value: string) => void
}) => {
  return (
    <Container>
      <h1>Config</h1>
      <div>
        <span>Theme</span>
        &nbsp;
        <select
          defaultValue={config.theme}
          onChange={event => {
            onChangeConfigValue("theme", event.target.value)
          }}
        >
          {themes.map(theme => (
            <option value={theme} key={theme}>
              {theme}
            </option>
          ))}
        </select>
      </div>
      <div>
        <span>Git: Committer Name</span>
        &nbsp;
        <input
          defaultValue={config.committerName}
          onChange={event => {
            onChangeConfigValue("committerName", event.target.value)
          }}
        />
      </div>
      <div>
        <span>Git: Committer Email</span>
        &nbsp;
        <input
          defaultValue={config.committerEmail}
          onChange={event => {
            onChangeConfigValue("committerEmail", event.target.value)
          }}
        />
      </div>
      <div>
        <span>GitHub: Private Access Token</span>
        &nbsp;
        <input
          defaultValue={config.githubApiToken}
          onChange={event => {
            onChangeConfigValue("githubApiToken", event.target.value)
          }}
        />
      </div>
      <div>
        <span>GitHub: CORS Proxy</span>
        &nbsp;
        <input
          defaultValue={config.githubProxy}
          onChange={event => {
            onChangeConfigValue("githubProxy", event.target.value)
          }}
        />
      </div>
      <p>
        CAUTION!!!: Setting token and using proxy are at your own risk. If we
        have vulnerability to access localStorage, it might be leak.
      </p>
      <div>
        <button onClick={onClickBack}>Back</button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  padding: 10px;
`
