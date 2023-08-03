import {Component} from 'react'
import {
  InputLabel,
  Input,
  Container,
  Bg,
  Button,
  Heading,
  Paragraph,
  SelectInput,
  Form,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
    isShowContent: false,
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onClickGenerate = event => {
    event.preventDefault()
    this.setState({isShowContent: true})
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, isShowContent} = this.state
    return (
      <Bg className="bg">
        <Container className="input-container">
          <Heading>Meme Generator</Heading>
          <Form id="myform" onSubmit={this.onClickGenerate}>
            <InputLabel htmlFor="imageUrl">Image URl</InputLabel>
            <Input
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={this.onChangeImageUrl}
            />
            <InputLabel htmlFor="topText">Top Text</InputLabel>
            <Input
              type="text"
              id="topText"
              value={topText}
              onChange={this.onChangeTopText}
            />
            <InputLabel htmlFor="bottomText">Bottom Text</InputLabel>
            <Input
              type="text"
              id="bottomText"
              value={bottomText}
              onChange={this.onChangeBottomText}
            />
            <InputLabel htmlFor="fontSize">Font Size</InputLabel>
            <SelectInput
              id="fontSize"
              value={fontSize}
              onChange={this.onChangeFontSize}
            >
              {fontSizesOptionsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}{' '}
                </option>
              ))}
            </SelectInput>
            <Button type="submit">Generate</Button>
          </Form>
        </Container>
        {isShowContent ? (
          <Container align="center" backgroundImg={imageUrl} data-testid="meme">
            <Paragraph fontSize={fontSize}>{topText}</Paragraph>
            <Paragraph fontSize={fontSize}>{bottomText}</Paragraph>
          </Container>
        ) : (
          ''
        )}
      </Bg>
    )
  }
}

export default MemeGenerator
