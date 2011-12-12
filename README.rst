How to use
==========

django-profiler uses builtin python module hotshot to grab information about what has run after executing a view.

You can use these information to help you find out what is dragging down your performance and load time that is now
shown on django-debug-toolbar_.

To use this app, clone this repository and add it into your $PYTHONPATH:

::
    $ git clone git://github.com/rafaelsdm/django-profiler.git
    $ export PYTHONPATH=$PYTHONPATH:`pwd`/django-profiler

Then add ``djangoprofiler`` into your ``INSTALLED_APPS`` so it can find it's own templates and activate profiling app:

::
    INSTALLED_APPS = (
        # ...
        'djangoprofiler'
    )
    PROFILER=True

And add ``djangoprofiler.middleware.ProfileMiddleware`` into your ``MIDDLEWARE_CLASSES``:

::
    MIDDLEWARE_CLASSES = (
        # ...
        'djangoprofiler.middleware.ProfileMiddleware',
        # ...
    )
    
Note that you may get more or fewer result depending where you put this line read more on django documentation_

This app only works with views that returns content type text/html (so you don't get garbage into images or anything you don't want).

To deactivate just set ``PROFILER`` to ``False`` into your settings file.

.. _django-debug-toolbar: http://pypi.python.org/pypi/django-debug-toolbar
.. _documentation: https://docs.djangoproject.com/en/dev/topics/http/middleware/#activating-middleware
