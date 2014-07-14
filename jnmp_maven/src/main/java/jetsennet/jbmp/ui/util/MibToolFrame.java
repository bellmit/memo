/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * MibToolFrame.java
 *
 * Created on 2011-10-12, 16:19:11
 */
package jetsennet.jbmp.ui.util;

import javax.swing.JDialog;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JRootPane;
import javax.swing.LookAndFeel;
import javax.swing.SwingUtilities;
import javax.swing.UIManager;
import javax.swing.UnsupportedLookAndFeelException;

import org.apache.log4j.Logger;
import org.jvnet.substance.skin.SubstanceBusinessBlueSteelLookAndFeel;

/**
 * @author GuoXiang
 */
public class MibToolFrame extends javax.swing.JFrame
{

    private static final Logger logger = Logger.getLogger(MibToolFrame.class);

    private void before()
    {
        try
        {
            // mpPanel = new SnmpNodeTablePanel();
        }
        catch (Exception ex)
        {
            logger.error("", ex);
        }
    }

    /** Creates new form MibToolFrame */
    public MibToolFrame()
    {
        this.before();
        initComponents();
        // tabbedPanel.add("解析", mpPanel);
        this.setLookAndFeel();
    }

    private void setLookAndFeel()
    {
        LookAndFeel look = new SubstanceBusinessBlueSteelLookAndFeel();
        JFrame.setDefaultLookAndFeelDecorated(look.getSupportsWindowDecorations());
        JDialog.setDefaultLookAndFeelDecorated(look.getSupportsWindowDecorations());
        try
        {
            UIManager.setLookAndFeel(look);
        }
        catch (UnsupportedLookAndFeelException e)
        {
            logger.error("", e);
        }
        this.dispose();
        this.setUndecorated(look.getSupportsWindowDecorations());
        this.getRootPane().setWindowDecorationStyle(JRootPane.FRAME);
        SwingUtilities.updateComponentTreeUI(this);
    }

    /**
     * This method is called from within the constructor to initialize the form. WARNING: Do NOT modify this code. The content of this method is
     * always regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents()
    {

        tabbedPanel = new javax.swing.JTabbedPane();
        jMenuBar1 = new javax.swing.JMenuBar();
        jMenu1 = new javax.swing.JMenu();
        jMenuItem1 = new javax.swing.JMenuItem();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jMenu1.setText("文件");

        jMenuItem1.setText("退出");
        jMenuItem1.addActionListener(new java.awt.event.ActionListener()
        {
            public void actionPerformed(java.awt.event.ActionEvent evt)
            {
                jMenuItem1ActionPerformed(evt);
            }
        });
        jMenu1.add(jMenuItem1);

        jMenuBar1.add(jMenu1);

        setJMenuBar(jMenuBar1);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING).addGroup(
            layout.createSequentialGroup().addContainerGap().addComponent(tabbedPanel, javax.swing.GroupLayout.DEFAULT_SIZE, 938, Short.MAX_VALUE)
                .addContainerGap()));
        layout.setVerticalGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING).addGroup(
            javax.swing.GroupLayout.Alignment.TRAILING,
            layout.createSequentialGroup().addContainerGap().addComponent(tabbedPanel, javax.swing.GroupLayout.DEFAULT_SIZE, 559, Short.MAX_VALUE)
                .addContainerGap()));

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void jMenuItem1ActionPerformed(java.awt.event.ActionEvent evt)
    {
        // GEN-FIRST:event_jMenuItem1ActionPerformed

        Object[] options = { "OK", "CANCEL" };
        int result =
            JOptionPane.showOptionDialog(null, "是否退出？", "退出", JOptionPane.DEFAULT_OPTION, JOptionPane.WARNING_MESSAGE, null, options, options[0]);
        if (result == 0)
        {
            dispose();
        }
    }// GEN-LAST:event_jMenuItem1ActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args)
    {
        java.awt.EventQueue.invokeLater(new Runnable()
        {

            public void run()
            {
                MibToolFrame frame = new MibToolFrame();
                frame.setTitle("MIB TOOL");
                frame.pack();
                frame.setLocationRelativeTo(null);
                frame.setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JMenu jMenu1;
    private javax.swing.JMenuBar jMenuBar1;
    private javax.swing.JMenuItem jMenuItem1;
    private javax.swing.JTabbedPane tabbedPanel;
    // End of variables declaration//GEN-END:variables
}
