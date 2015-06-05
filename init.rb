# Redmine pandoc formatter
require 'redmine'
require 'redmine_logdown_preview'
require 'redmine_logdown_preview/hooks/view_layouts_base_html_head'

Redmine::Plugin.register :redmine_logdown_preview do
  name 'readmine logdown preview'
  author 'othree'
  description 'Enable ctrl-d for full page preview, ctrl-e back to editing'
  version '0.0.1'
end
