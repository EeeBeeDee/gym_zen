def media_base_url(request):
    """
    Return media base url
    """
    media_base_url = 'https://res.cloudinary.com/dtnj4czrm/image/upload/v1/'
    return {'MEDIA_BASE_URL': media_base_url}
