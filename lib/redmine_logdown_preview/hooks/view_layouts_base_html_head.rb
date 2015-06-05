module RedmineLogdownPreview
  class StylesheetHook < Redmine::Hook::ViewListener
    def view_layouts_base_html_head(context)
      javascript_include_tag "logdown-preview", :plugin => :redmine_logdown_preview
    end
  end
end
