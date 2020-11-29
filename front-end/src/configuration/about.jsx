import React from 'react'
import { fetchInfo } from 'redux/actions/info'
import { connect } from 'react-redux'
import i18n from 'utils/i18n'

class about extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      timer: window.setInterval(props.fetchInfo, 1800 * 1000)
    }
  }

  componentWillUnmount () {
    if (this.state && this.state.timer) {
      window.clearInterval(this.state.timer)
    }
  }

  render () {
    return (
      <div className='container'>
        <div className='row justify-content-md-center'>
          <div className='card mb-4 box-shadow'>
            <div className='card-header'>
              <h4 className='my-0 font-weight-normal text-center'>reef-pi</h4>
            </div>
            <div className='card-body'>
              <h2 className='card-title pricing-card-title'>
                {i18n.t('configuration:about:version')}: <small className='text-muted'>{this.props.info.version}</small>
              </h2>
              <ul className='list-unstyled mt-3 mb-4'>
                <li>
                  {i18n.t('configuration:about:modifications')}: <a href="mailto:jose.reyes@prswservices.com">Jos&eacute; F. Reyes</a>
                </li>
                <li>
                  Github: <a href='https://github.com/prsws/reef-pi' target='_blank'>https://github.com/prsws/reef-pi</a><br/>
                </li>
                <li>
                  <hr />
                </li>
                <li>
                  <h5 className='my-0 font-weight-normal text-center'>Upstream Original Source</h5>
                </li>
                <li>
                  {i18n.t('configuration:about:website')}: <a href='http://reef-pi.com'>http://reef-pi.com</a>
                </li>
                <li>
                  Github: <a href='https://github.com/reef-pi/reef-pi'>https://github.com/reef-pi/reef-pi</a>
                </li>
                <li>Copyright © {new Date().getFullYear()} Ranjib Dey</li>
              </ul>
              <h2 className='card-title pricing-card-title'>{i18n.t('configuration:about:status')}</h2>
              <ul className='list-unstyled mt-3 mb-4'>
                <li>{i18n.t('configuration:about:current_time')}: {this.props.info.current_time}</li>
                <li>{i18n.t('configuration:about:uptime')}: {this.props.info.uptime}</li>
                <li>IP: {this.props.info.ip}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errors,
    info: state.info
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchInfo: () => dispatch(fetchInfo(dispatch))
  }
}
const About = connect(
  mapStateToProps,
  mapDispatchToProps
)(about)
export default About
