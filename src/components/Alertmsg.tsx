
import PropTypes from 'prop-types'
type variantType = 'success' | 'info' | 'danger' | 'warning' | 'primary' | 'dark';

function Alertmsg({ message, variant }: { message: string, variant: variantType }) {

    if (message.length == 0) return null
    return (
        <div className={'alert alert-' + variant}>{message}</div>
    )
}

Alertmsg.propTypes = {
    message: PropTypes.string.isRequired
}

export default Alertmsg