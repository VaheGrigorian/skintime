import PropTypes from 'prop-types'

export const DepartmentType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
})
